
import { test, expect } from "@playwright/experimental-ct-react";
import App540 from "../example/App540.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App540 />);
  await expect(component).toContainText("Learn React");
});
