
import { test, expect } from "@playwright/experimental-ct-react";
import App1953 from "../example/App1953.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1953 />);
  await expect(component).toContainText("Learn React");
});
