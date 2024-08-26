
import { test, expect } from "@playwright/experimental-ct-react";
import App645 from "../example/App645.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App645 />);
  await expect(component).toContainText("Learn React");
});
