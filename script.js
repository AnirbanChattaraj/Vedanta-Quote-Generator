
    const quotes = [
      "Arise, awake, and stop not till the goal is reached. – Swami Vivekananda",
      "You are the Atman, deathless and infinite. – Upanishads",
      "Strength is life, weakness is death. – Swami Vivekananda",
      "The soul is never born, nor does it die. – Bhagavad Gita",
      "The greatest religion is to be true to your own nature. – Swami Vivekananda",
      "He who sees all beings in the Self and the Self in all beings, never turns away from it. – Isha Upanishad",
      "Stand up, be bold, be strong. Take the whole responsibility on your own shoulders. – Swami Vivekananda",
      "That which is real never ceases to be; that which is unreal never is. – Bhagavad Gita",
      "When there is conflict between the heart and the brain, follow your heart. – Swami Vivekananda",
      "You are not the body, not the mind, immortal Self am I. – Vedanta",
      "Work as worship; see God in all. – Swami Vivekananda",
      "The mind alone is the cause of bondage and liberation. – Amrita Bindu Upanishad",
      "Calmness is the ideal. Let nothing disturb you. – Swami Vivekananda",
      "See God in every face, serve Him in every hand. – Vedantic Teaching",
      "Perform your duty without attachment, surrendering the results to the Divine. – Bhagavad Gita"
    ];

    function newQuote() {
      const random = Math.floor(Math.random() * quotes.length);
      const quoteEl = document.getElementById("quote");
      quoteEl.style.opacity = 0;
      setTimeout(() => {
        quoteEl.textContent = `“${quotes[random]}”`;
        quoteEl.style.opacity = 1;
      }, 400);
    }
 