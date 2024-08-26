
import { test, expect } from "@playwright/experimental-ct-react";
import App24 from "../example/App24.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App24 />);
  await expect(component).toContainText("Learn React");
});
