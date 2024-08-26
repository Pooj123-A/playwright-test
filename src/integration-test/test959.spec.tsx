
import { test, expect } from "@playwright/experimental-ct-react";
import App959 from "../example/App959.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App959 />);
  await expect(component).toContainText("Learn React");
});
