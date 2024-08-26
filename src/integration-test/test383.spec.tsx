
import { test, expect } from "@playwright/experimental-ct-react";
import App383 from "../example/App383.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App383 />);
  await expect(component).toContainText("Learn React");
});
