
import { test, expect } from "@playwright/experimental-ct-react";
import App2921 from "../example/App2921.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2921 />);
  await expect(component).toContainText("Learn React");
});
