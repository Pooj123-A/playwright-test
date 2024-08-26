
import { test, expect } from "@playwright/experimental-ct-react";
import App153 from "../example/App153.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App153 />);
  await expect(component).toContainText("Learn React");
});
