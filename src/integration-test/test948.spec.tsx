
import { test, expect } from "@playwright/experimental-ct-react";
import App948 from "../example/App948.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App948 />);
  await expect(component).toContainText("Learn React");
});
