
import { test, expect } from "@playwright/experimental-ct-react";
import App49 from "../example/App49.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App49 />);
  await expect(component).toContainText("Learn React");
});
