export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const message = formData.get("message");

    // TODO: Implement actual submission logic (e.g., send email, store in database)
    console.log("Form data received:", { email, message });

    return new Response(
      JSON.stringify({
        message: "Message sent successfully!",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send message. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
