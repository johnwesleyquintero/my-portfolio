import { useState, useEffect, useCallback, useMemo } from "react";
import { skills } from "@/data/data-server.js";
import { experience } from "@/data/data-server.js";
import { projects } from "@/data/data-server.js";
import data from "@/data/data-server.js";
import type { Skill, Experience, Certification, Project } from "@/types";

type SearchResultType = "skill" | "experience" | "certification" | "project";

interface SearchResult {
  type: SearchResultType;
  title: string;
  description: string;
  highlight?: string;
  url?: string;
  data: Skill | Experience | Certification | Project;
}

interface SearchState {
  query: string;
  results: SearchResult[];
  isSearching: boolean;
  selectedIndex: number;
  isDropdownVisible: boolean;
}

const DEBOUNCE_DELAY = 300;

export default function SearchBox() {
  const [state, setState] = useState<SearchState>({
    query: "",
    results: [],
    isSearching: false,
    selectedIndex: -1,
    isDropdownVisible: false
  });

  const { query, results, isSearching, selectedIndex, isDropdownVisible } = state;

  const updateState = useCallback((updates: Partial<SearchState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const searchData = useCallback(async () => {
    try {
      if (!query.trim()) {
        updateState({ results: [], isSearching: false });
        return;
      }

      updateState({ isSearching: true });
    const searchResults: SearchResult[] = [];
    const searchTerm = query.toLowerCase();

    // Search through skills
    Object.entries(skills.categories).forEach(([category, items]) => {
      items.forEach((skill: Skill) => {
        if (
          skill.name.toLowerCase().includes(searchTerm) ||
          skill.tools?.some((tool) =>
            tool.toLowerCase().includes(searchTerm),
          )
        ) {
          searchResults.push({
            type: "skill",
            title: skill.name,
            description: `${skill.proficiency} - ${skill.tools?.join(", ")}`,
            highlight: skill.tools?.find((tool) =>
              tool.toLowerCase().includes(searchTerm),
            ),
            data: skill,
            url: `/search/skill/${encodeURIComponent(skill.name)}`
          });
        }
      });
    });

    // Search through experience
    experience.forEach((exp: Experience) => {
      if (
        exp.title.toLowerCase().includes(searchTerm) ||
        exp.company.toLowerCase().includes(searchTerm) ||
        exp.description?.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: "experience",
          title: exp.title,
          description: `${exp.company} - ${exp.employment.duration}`,
          highlight: exp.description,
          data: exp,
          url: `/search/experience/${encodeURIComponent(exp.title)}`
        });
      }
    });

    // Search through certifications
    data.certifications.list.forEach((cert: Certification) => {
      if (
        cert.name.toLowerCase().includes(searchTerm) ||
        cert.issuer.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: "certification",
          title: cert.name,
          description: `${cert.issuer} - ${cert.issueDate}`,
          data: cert,
          url: `/search/certification/${encodeURIComponent(cert.name)}`
        });
      }
    });

    // Search through projects
    projects.forEach((project: Project) => {
      if (
        project.name.toLowerCase().includes(searchTerm) ||
        project.description?.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: "project",
          title: project.name,
          description: project.description || "",
          data: project,
          url: `/search/project/${encodeURIComponent(project.name)}`
        });
      }
    });

      updateState({
        results: searchResults,
        isSearching: false
      });
    } catch (error) {
      console.error('Search error:', error);
      updateState({
        results: [],
        isSearching: false
      });
    }
  }, [query]);

  useEffect(() => {
    const debounceTimer = setTimeout(searchData, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchData]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            updateState({
              query: e.target.value,
              isDropdownVisible: true,
              selectedIndex: -1
            });
          }}
          onFocus={() => updateState({ isDropdownVisible: true })}
          role="combobox"
          aria-expanded={isDropdownVisible}
          aria-controls="search-results"
          aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              updateState({
                selectedIndex: Math.min(selectedIndex + 1, results.length - 1),
                isDropdownVisible: true
              });
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              updateState({
                selectedIndex: Math.max(selectedIndex - 1, -1),
                isDropdownVisible: true
              });
            } else if (e.key === "Enter" && selectedIndex >= 0) {
              e.preventDefault();
              window.location.href = results[selectedIndex].url || "";
            } else if (e.key === "Escape") {
              e.preventDefault();
              updateState({
                isDropdownVisible: false,
                selectedIndex: -1
              });
            }
          }}
          placeholder="Search skills, experience, certifications..."
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-200 placeholder-slate-400"
        />
        {isSearching && (
          <div className="absolute right-3 top-2.5">
            <div className="animate-spin h-5 w-5 border-2 border-emerald-500 rounded-full border-t-transparent"></div>
          </div>
        )}
      </div>

      {isDropdownVisible && results.length > 0 && (
        <div 
          id="search-results"
          role="listbox"
          className="absolute w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50"
        >
          <div 
            className="max-h-96 overflow-y-auto"
            role="presentation"  
          >
            {results.map((result, index) => (
              <a
                href={result.url}
                key={`${result.type}-${index}`}
                id={`result-${index}`}
                role="option"
                aria-selected={selectedIndex === index}
                className={`block p-4 hover:bg-slate-700 border-b border-slate-700 last:border-0 ${selectedIndex === index ? "bg-slate-700" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                    {result.type}
                  </span>
                  <h3 className="text-slate-200 font-medium">{result.title}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-400">
                  {result.description}
                </p>
                {result.highlight && (
                  <p className="mt-1 text-sm text-emerald-400">
                    Matching: {result.highlight}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
