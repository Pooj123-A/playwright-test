
import { test, expect } from "@playwright/experimental-ct-react";
import App737 from "../example/App737.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App737 />);
  await expect(component).toContainText("Learn React");
});
