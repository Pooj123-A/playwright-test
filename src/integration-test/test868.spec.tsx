
import { test, expect } from "@playwright/experimental-ct-react";
import App868 from "../example/App868.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App868 />);
  await expect(component).toContainText("Learn React");
});
