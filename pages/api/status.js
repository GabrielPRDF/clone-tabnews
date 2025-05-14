function status(request, response) {
  response.status(200).json({ chave: "Estamos progredindo \u{1F600}" });
}

export default status;
