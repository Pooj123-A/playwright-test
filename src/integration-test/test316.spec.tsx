
import { test, expect } from "@playwright/experimental-ct-react";
import App316 from "../example/App316.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App316 />);
  await expect(component).toContainText("Learn React");
});
