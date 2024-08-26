
import { test, expect } from "@playwright/experimental-ct-react";
import App854 from "../example/App854.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App854 />);
  await expect(component).toContainText("Learn React");
});
