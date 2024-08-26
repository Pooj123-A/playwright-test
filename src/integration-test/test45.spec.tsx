
import { test, expect } from "@playwright/experimental-ct-react";
import App45 from "../example/App45.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App45 />);
  await expect(component).toContainText("Learn React");
});
