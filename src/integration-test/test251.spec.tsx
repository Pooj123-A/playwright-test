
import { test, expect } from "@playwright/experimental-ct-react";
import App251 from "../example/App251.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App251 />);
  await expect(component).toContainText("Learn React");
});
