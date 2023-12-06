function manufacture(gifts, materials) {
    return gifts.filter(gift => {
      const giftLetters = new Set(gift);
      for (const letter of giftLetters) {
        if (!materials.includes(letter)) {
          return false;
        }
      }
      return true;
    });
  }