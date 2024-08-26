
import { test, expect } from "@playwright/experimental-ct-react";
import App1951 from "../example/App1951.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1951 />);
  await expect(component).toContainText("Learn React");
});
