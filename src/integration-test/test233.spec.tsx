
import { test, expect } from "@playwright/experimental-ct-react";
import App233 from "../example/App233.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App233 />);
  await expect(component).toContainText("Learn React");
});
