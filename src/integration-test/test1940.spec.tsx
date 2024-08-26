
import { test, expect } from "@playwright/experimental-ct-react";
import App1940 from "../example/App1940.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1940 />);
  await expect(component).toContainText("Learn React");
});
