
import { test, expect } from "@playwright/experimental-ct-react";
import App452 from "../example/App452.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App452 />);
  await expect(component).toContainText("Learn React");
});
