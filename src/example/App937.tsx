
import { test, expect } from "@playwright/experimental-ct-react";
import App937 from "./App937.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App937 />);
  await expect(component).toContainText("Learn React");
});
