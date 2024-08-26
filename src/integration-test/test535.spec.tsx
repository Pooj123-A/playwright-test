
import { test, expect } from "@playwright/experimental-ct-react";
import App535 from "../example/App535.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App535 />);
  await expect(component).toContainText("Learn React");
});
