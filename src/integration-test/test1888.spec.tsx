
import { test, expect } from "@playwright/experimental-ct-react";
import App1888 from "../example/App1888.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1888 />);
  await expect(component).toContainText("Learn React");
});
