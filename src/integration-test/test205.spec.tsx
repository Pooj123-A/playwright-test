
import { test, expect } from "@playwright/experimental-ct-react";
import App205 from "../example/App205.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App205 />);
  await expect(component).toContainText("Learn React");
});
