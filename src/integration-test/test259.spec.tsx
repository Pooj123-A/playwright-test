
import { test, expect } from "@playwright/experimental-ct-react";
import App259 from "../example/App259.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App259 />);
  await expect(component).toContainText("Learn React");
});
