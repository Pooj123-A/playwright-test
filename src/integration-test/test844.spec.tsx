
import { test, expect } from "@playwright/experimental-ct-react";
import App844 from "../example/App844.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App844 />);
  await expect(component).toContainText("Learn React");
});
