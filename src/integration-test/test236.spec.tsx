
import { test, expect } from "@playwright/experimental-ct-react";
import App236 from "../example/App236.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App236 />);
  await expect(component).toContainText("Learn React");
});
