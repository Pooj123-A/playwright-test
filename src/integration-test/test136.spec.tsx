
import { test, expect } from "@playwright/experimental-ct-react";
import App136 from "../example/App136.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App136 />);
  await expect(component).toContainText("Learn React");
});
