
import { test, expect } from "@playwright/experimental-ct-react";
import App970 from "../example/App970.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App970 />);
  await expect(component).toContainText("Learn React");
});
