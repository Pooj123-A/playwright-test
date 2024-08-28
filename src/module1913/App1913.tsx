
import { test, expect } from "@playwright/experimental-ct-react";
import App1913 from "./App1913.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1913 />);
  await expect(component).toContainText("Learn React");
});
