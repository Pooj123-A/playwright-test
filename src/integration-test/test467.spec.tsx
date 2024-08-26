
import { test, expect } from "@playwright/experimental-ct-react";
import App467 from "../example/App467.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App467 />);
  await expect(component).toContainText("Learn React");
});
