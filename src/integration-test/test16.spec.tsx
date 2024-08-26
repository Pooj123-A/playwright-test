
import { test, expect } from "@playwright/experimental-ct-react";
import App16 from "../example/App16.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App16 />);
  await expect(component).toContainText("Learn React");
});
