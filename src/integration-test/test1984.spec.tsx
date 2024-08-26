
import { test, expect } from "@playwright/experimental-ct-react";
import App1984 from "../example/App1984.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1984 />);
  await expect(component).toContainText("Learn React");
});
