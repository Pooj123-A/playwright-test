
import { test, expect } from "@playwright/experimental-ct-react";
import App2547 from "../example/App2547.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2547 />);
  await expect(component).toContainText("Learn React");
});
