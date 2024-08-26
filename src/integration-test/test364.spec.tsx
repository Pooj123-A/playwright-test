
import { test, expect } from "@playwright/experimental-ct-react";
import App364 from "../example/App364.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App364 />);
  await expect(component).toContainText("Learn React");
});
