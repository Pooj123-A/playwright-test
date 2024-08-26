
import { test, expect } from "@playwright/experimental-ct-react";
import App941 from "../example/App941.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App941 />);
  await expect(component).toContainText("Learn React");
});
