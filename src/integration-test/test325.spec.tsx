
import { test, expect } from "@playwright/experimental-ct-react";
import App325 from "../example/App325.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App325 />);
  await expect(component).toContainText("Learn React");
});
