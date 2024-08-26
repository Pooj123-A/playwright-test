
import { test, expect } from "@playwright/experimental-ct-react";
import App98 from "../example/App98.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App98 />);
  await expect(component).toContainText("Learn React");
});
