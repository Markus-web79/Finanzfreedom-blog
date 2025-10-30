.hero {
  position: relative;
  background-image: url('/hero-bg.jpg'); /* kannst du später austauschen */
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
}

.content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.content h1 span {
  color: #00a19b;
}

.content p {
  font-size: 1.3rem;
  color: #f0f0f0;
  margin-bottom: 30px;
}

.button {
  background-color: #00a19b;
  color: white;
  padding: 14px 32px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.button:hover {
  background-color: white;
  color: #00a19b;
}
