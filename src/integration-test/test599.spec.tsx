
import { test, expect } from "@playwright/experimental-ct-react";
import App599 from "../example/App599.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App599 />);
  await expect(component).toContainText("Learn React");
});
