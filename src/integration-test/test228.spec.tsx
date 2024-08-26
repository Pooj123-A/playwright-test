
import { test, expect } from "@playwright/experimental-ct-react";
import App228 from "../example/App228.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App228 />);
  await expect(component).toContainText("Learn React");
});
