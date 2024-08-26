
import { test, expect } from "@playwright/experimental-ct-react";
import App950 from "../example/App950.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App950 />);
  await expect(component).toContainText("Learn React");
});
