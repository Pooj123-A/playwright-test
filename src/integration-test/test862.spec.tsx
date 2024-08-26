
import { test, expect } from "@playwright/experimental-ct-react";
import App862 from "../example/App862.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App862 />);
  await expect(component).toContainText("Learn React");
});
