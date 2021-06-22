export default async function preview(req, res) {
  // Check the secret and next parameters
  if (req.query.secret !== process.env.CONTENT_PREVIEW_API_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
    }
  );

  // Redirect to the path from the fetched post
  const url = `/`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
