
import { test, expect } from "@playwright/experimental-ct-react";
import App2619 from "../example/App2619.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2619 />);
  await expect(component).toContainText("Learn React");
});
