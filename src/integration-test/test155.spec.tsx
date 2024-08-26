
import { test, expect } from "@playwright/experimental-ct-react";
import App155 from "../example/App155.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App155 />);
  await expect(component).toContainText("Learn React");
});
