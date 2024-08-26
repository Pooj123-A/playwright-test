
import { test, expect } from "@playwright/experimental-ct-react";
import App167 from "../example/App167.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App167 />);
  await expect(component).toContainText("Learn React");
});
