
import { test, expect } from "@playwright/experimental-ct-react";
import App21 from "../example/App21.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App21 />);
  await expect(component).toContainText("Learn React");
});