
import { test, expect } from "@playwright/experimental-ct-react";
import App1668 from "../example/App1668.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1668 />);
  await expect(component).toContainText("Learn React");
});
