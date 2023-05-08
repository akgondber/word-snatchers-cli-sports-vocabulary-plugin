import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliSportsVocabularyPlugin from "../index.js";

let wordSnatchersCliSportsVocabularyPlugin;

test.before.each(() => {
  wordSnatchersCliSportsVocabularyPlugin =
    new WordSnatchersCliSportsVocabularyPlugin();
});

test("WordSnatchersCliSportsVocabularyPlugin#build", () => {
  const items = wordSnatchersCliSportsVocabularyPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1)
  );
});

test.run();
